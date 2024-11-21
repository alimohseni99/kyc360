"use client";

import { deleteAccount } from "../action";

export default function DeleteAccount() {
  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    deleteAccount(formData);
  };
  return (
    <div>
      <section>
        <form onClick={onClick} name="delete-account">
          <label>Email</label>
          <input type="id" name="id" />
          <button type="submit">Delete Account</button>
        </form>
      </section>
    </div>
  );
}
