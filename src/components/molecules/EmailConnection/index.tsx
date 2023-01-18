import { InputInvisible } from './style'

export const EmailConnection = () => {
 return (
  <>
   <InputInvisible type="text" name="honeypot" />
   <InputInvisible type="hidden" name="accessKey" value={process.env.NEXT_PUBLIC_EMAILCMS_KEY} />
   <InputInvisible type="hidden" name="subject" value="Novo contato no DropMovie!!" />
   <InputInvisible type="hidden" name="replyTo" value="@" />
   <InputInvisible type="hidden" name="redirectTo" value="https://dropmovie.vercel.app/" />
  </>
 )
}