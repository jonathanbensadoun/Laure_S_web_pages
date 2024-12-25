// "use client";

// // import emailjs from '@emailjs/browser';

// export type ReservationData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   reason?: string;
//   date?: string;
//   time?: string;
//   consultationType?: string;
// };

// export async function sendReservationEmail(data: ReservationData): Promise<void> {
//   if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
//       !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
//       !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
//     throw new Error('Missing EmailJS configuration');
//   }

//   await emailjs.send(
//     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//     data,
//     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//   );
// }