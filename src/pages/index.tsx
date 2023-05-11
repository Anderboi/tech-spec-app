'use client'

import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import style from "./landing_page.module.scss";
import { Auth } from "@supabase/auth-ui-react";
import AccountPage from "./AccountPage";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

function Page() {
  // const session = useSession();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
      console.log(data)
    } // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  return (
    <section className={style.container}>
      <div className={style.textblock}>
        <h1>Track your interior design projects, make it clear.</h1>
        <small>
          Our app helps you to track your projects, make proper project
          decisions.
        </small>
      </div>

      {!user && (
        <Auth
          redirectTo="/AccountPage"
          providers={["google", "facebook", "apple"]}
          magicLink
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          // theme="system"
          socialLayout="horizontal"
        />
        // ) : (
        //   <AccountPage session={session} />
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
}

export default Page;
