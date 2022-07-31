import prisma from "../../../../lib/prisma";

export default async function handlePost(req: any, res: any) {
  const { company, conferenceId, conferenceLDate, conferenceLocation, conferenceSignUpDate, conferenceSignUpTimestamp, name, surname, email, message } = req.body;
  console.log(req.body);

  const result = await prisma.user.create({
    data: {
      company: company,
      conferenceId: conferenceId,
      conferenceLDate: conferenceLDate,
      conferenceLocation: conferenceLocation,
      conferenceSignUpDate: conferenceSignUpDate,
      conferenceSignUpTimestamp: conferenceSignUpTimestamp,
      name: name,
      surname: surname,
      email: email,
      message: message,
    },
  });
  console.log();

  res.json(result);
}
