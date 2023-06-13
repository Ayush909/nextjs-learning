import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "ayu", name: "Ayush" },
    { id: "sam", name: "Samuel" },
  ];
  return (
    <>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientPage;
