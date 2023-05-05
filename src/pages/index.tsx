import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import style from "./landing_page.module.scss";
import { Auth } from '@supabase/auth-ui-react';
import AccountPage from './AccountPage';
import { ThemeSupa } from "@supabase/auth-ui-shared";

function Page() {
      const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <section className={style.container}>
      <div className={style.textblock}>
        <h1>Track your interior design projects, make it clear.</h1>
        <small>
          Our app helps you to track your projects, make proper project
          decisions.
        </small>
      </div>

      {!session ? (
        <Auth
          magicLink
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <AccountPage session={session} />
      )}

      {/* <FormBlock>
        <Input type="email" placeholder="email" id='email' name='email'></Input>
        <div className={style.buttonblock}>
          <Button mode="ghost">Have an account?</Button>
          <Button mode="action">Sign Up</Button>
        </div>
      </FormBlock> */}
    </section>
  );
};


export default Page;
