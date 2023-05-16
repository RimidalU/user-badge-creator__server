// eslint-disable-next-line @typescript-eslint/no-var-requires
const PDFDocument = require('pdfkit');
import { join } from 'path';
import { UserEntity } from 'src/users/entities/user.entity';

export const badgeCreator = async (user: UserEntity) => {
  const filePath = join('./uploads/', user.image);

  const ret = await new Promise<Buffer>((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A7',
        layout: 'landscape',
        margins: {
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        },
      });

      const buffers = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });

      doc
        .fontSize(30)
        .fillColor('blue')
        .font('Times-Bold')
        .text('MULTY PASS', 10, 10, { align: 'center' });

      doc.image(filePath, 10, 45, {
        fit: [120, 120],
        align: 'center',
        valign: 'center',
      });

      doc
        .font('Times-Italic', 10)
        .fillColor('black')
        .text('Name: ', 150, 50)
        .font('Times-Bold', 13)
        .text(user.firstName, 150, 70);

      doc
        .font('Times-Italic', 10)
        .text('Last name: ', 150, 100)
        .font('Times-Bold', 13)
        .text(user.lastName, 150, 120);

      doc
        .font('Times-Italic', 10)
        .text('Email: ', 150, 150)
        .font('Times-Bold', 13)
        .text(user.email, 150, 170);

      doc
        .font('Times-Italic', 5)
        .text('security Department: ', 10, 180)
        .font('Times-Bold', 7)
        .text(`${user.lastName} ${user.firstName}`, 10, 190);

      doc.end();
    } catch (err) {
      reject(`PDF generation error: ${err.message}`);
    }
  });
  return ret;
};
