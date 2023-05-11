// import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
// import { Session, User } from "@supabase/supabase-js";
import React, {  useState } from "react";
// import { Database } from "../types/database.types";
import FormBlock from "../components/base/form/formBlock/FormBlock";
import Input from "../components/base/inputs/Input";
import { User, createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';


const AccountPage = ({ user, data }: { user: User; data: any }) => {

const [email, setEmail] = useState(user.email)
const [name, setName] = useState(user.id)

console.log(data);
  return (
    // <>
    //   <div>Protected content for {user.email} the {data[0].role}</div>
    //   <pre>{JSON.stringify(data, null, 2)}</pre>
    //   {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    // </>
    <FormBlock>
      <div className="form-widget">
        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            type="text"
            value={name || ""}
            placeholder="User"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
     <div>
      {/* //TODO: make button to change role */}
      <select name="role" id="role">
        <option value="User">User</option>
        <option value='Client'>Client</option>
        <option value='Designer'>Designer</option>
      </select>
     </div>
         {/* <div>
           <button
            className="button primary block"
            onClick={() => updateProfile({ username, email, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div> */}
        {/* <div>
           <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button> 
        </div> */}
      </div>
    </FormBlock>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

    // Run queries with RLS on the server
  const { data } = await supabase.from('profiles').select('*')

  return {
    props: {
      initialSession: session,
      user: session.user,
      data: data ?? [],
    },
  };
};

export default AccountPage;
