// pages/index.js
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import supabase from "../supabase";
import Informtion from "../components/information";
const HomePage = ({ initialData }) => {
  const [dataUsers, setDataUsers] = useState(initialData);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { data, error } = await supabase.from("dataUsers").insert([values]);
      if (error) throw error;
      setDataUsers([...dataUsers, data[0]]);
      resetForm();
    } catch (error) {
      console.error("Error saving person:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800">
      <div className="w-1/2  bg-white p-8 rounded-lg shadow-lg dark:bg-slate-800">
        <h1 className="text-3xl font-semibold mb-4">Insert ta données</h1>
        <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
        <Formik
          initialValues={{
            name: "",
            age: "",
            raison: "",
            orienter: "",
            temps: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium font-serif">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block font-medium">
                Age:
              </label>
              <Field
                type="number"
                id="age"
                name="age"
                className="w-full mt-1 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="raison" className="block font-medium">
                Raison:
              </label>
              <Field
                type="text"
                id="raison"
                name="raison"
                className="w-full mt-1 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="orienter" className="block font-medium">
                Orienter:
              </label>
              <Field
                type="text"
                id="orienter"
                name="orienter"
                className="w-full mt-1 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="temps" className="block font-medium">
                Temps (in min):
              </label>
              <Field
                type="number"
                id="temps"
                name="temps"
                className="w-full mt-1 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        </Formik>
        <h2 className="text-2xl font-semibold mt-8">Info</h2>
        <ul>
          {dataUsers.map((user) => (
            <li key={user.id} className="mt-2">
              <strong>Name:</strong> {user.name}, <strong>Age:</strong>{" "}
              {user.age}, <strong>Raison:</strong> {user.raison},{" "}
              <strong>Orienter:</strong> {user.orienter},{" "}
              <strong>Temps:</strong> {user.temps} min
            </li>
          ))}
        </ul>
        <Informtion />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data, error } = await supabase.from("dataUsers").select("*");
  if (error) {
    console.error("Error fetching dataUsers:", error);
    return { props: { initialData: [] } };
  }
  return { props: { initialData: data } };
}

export default HomePage;
