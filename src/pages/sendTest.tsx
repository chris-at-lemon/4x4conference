import type { NextPage } from "next";

import styles from "../styles/pages/profile/profile.module.scss";

const Send: NextPage = () => {
  const handleSend = async () => {
    const res = await fetch("/api/sendgrid", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log("response", res);

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  return <button onClick={handleSend}>send mail</button>;
};

export default Send;
