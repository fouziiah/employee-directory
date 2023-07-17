import { useState } from "react";
// import randomly, { randomNumber } from "../utility/randomly";
//controlled component/form

export default function Form({ addEmployee }) {
  let [form, setForm] = useState({
    name: "",
    title: "",
    phone: "",
    email: ""
  });

  function handleSubmit(event) {
    // prevent the page from reloading because its an on submit
    event.preventDefault();
    // alert(form);
    // let rngHeadshot = `../images/headshot${randomNumber(12)}.jpeg`;
    let employee = {
      ...form,
      headshot: '../images/headshot9.jpeg',
      borderColor: "blue",
      id: crypto.randomUUID()
    };

    setForm({
      name: "",
      title: "",
      phone: "",
      email: ""
    });

    addEmployee(employee);
  }

  //form.name <-- dot notation to get the value of form.name

  //let prop = 'name'

  //form[prop]  <-- bracket notation

  function handleChange(event) {
    // setInput(event.target.value);
    // called computer property name
    let key = event.target.id;
    setForm({ ...form, [key]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" value={form.name} onChange={handleChange} />
      <br />
      <label htmlFor="title">Title</label>
      <input id="title" value={form.title} onChange={handleChange}></input>
      <br />
      <label htmlFor="phone">Phone #</label>
      <input id="phone" value={form.phone} onChange={handleChange}></input>
      <br />
      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleChange}></input>
      <br />
      <button>Submit</button>
    </form>
  );
}
