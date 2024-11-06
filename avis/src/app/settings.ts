import { env } from 'src/assets/env';
export class settings {
    public static API = {
      CHECK_MAIL_EXISTS: env.apiUrl + `/check/mail/exists`,
   
    };
  }

