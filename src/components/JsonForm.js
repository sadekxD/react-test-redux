import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function JsonForm() {
  const [object, setObject] = useState({
    name: "",
    email: "",
    tags: [],
  });

  const _change = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-5">
      <pre>{JSON.stringify(object, null, 36)}</pre>
      <Form
        className="d-flex flex-column align-items-center mx-auto"
        style={{ maxWidth: 500 }}
      >
        <FormControl
          onChange={_change}
          placeholder="name"
          name="name"
          type="text"
          className="mb-2"
        />
        <FormControl
          onChange={_change}
          placeholder="email"
          name="email"
          type="text"
          className="mb-2"
        />
        <Select
          onChange={(value) =>
            setObject({ ...object, tags: value.map((v) => v.value) })
          }
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select w-100"
          classNamePrefix="select"
        />
      </Form>
    </div>
  );
}

export default JsonForm;
