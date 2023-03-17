import { MailSlurp } from "mailslurp-client";

const inbox = await MailSlurp.createInbox();
const options = {
  to: ["getnvq@outlook.com"],
  subject: 'Hello',
  body: 'Welcome',
};
const sent = await MailSlurp.sendEmail("feedback@site.com", options);


expect(sent.subject).toContain('Hello');

export default sent;