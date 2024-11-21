"use client";

import { createAccount } from "../action";

export default function CreateAccount() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    createAccount(formData);
  };

  return (
    <div>
      <section>
        <form onSubmit={onSubmit} name="account">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Account Type</label>
          <select name="accountType" id="">
            <option value="Individual">Individual</option>
            <option value="Company">Company</option>
          </select>
          <button type="submit">Create Account</button>
        </form>
      </section>
    </div>
  );
}
