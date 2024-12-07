import { useFormik } from "formik";
import React, { useState } from "react";
import { initialValues, validationSchema } from "./AddressForm.form";
import { Address } from "@/api";

const addressCtrl = new Address();

export const AddressForm = (props) => {
  const { onClose, onReload, address } = props;
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setLoading(true);
      setErrors({});
      try {
        if (address != undefined) {
          await addressCtrl.update(formValue, address.id);
        } else {
          await addressCtrl.create(formValue);
        }

        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        setErrors({ general: "Error saving address" });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {errors.general && <p className="error">{errors.general}</p>}

      <div className="input-group">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="error">{formik.errors.title}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="error">{formik.errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
          />
          {formik.touched.surname && formik.errors.surname && (
            <p className="error">{formik.errors.surname}</p>
          )}
        </div>
      </div>
      <div className="input-group">
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formik.values.company}
            onChange={formik.handleChange}
          />
          {formik.touched.company && formik.errors.company && (
            <p className="error">{formik.errors.company}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="vat"
            placeholder="VAT"
            value={formik.values.vat}
            onChange={formik.handleChange}
          />
          {formik.touched.vat && formik.errors.vat && (
            <p className="error">{formik.errors.vat}</p>
          )}
        </div>
      </div>

      <input
        type="text"
        name="region"
        placeholder="Region"
        value={formik.values.region}
        onChange={formik.handleChange}
      />
      {formik.touched.region && formik.errors.region && (
        <p className="error">{formik.errors.region}</p>
      )}

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formik.values.city}
        onChange={formik.handleChange}
      />
      {formik.touched.city && formik.errors.city && (
        <p className="error">{formik.errors.city}</p>
      )}
      <div className="input-group">
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.touched.address && formik.errors.address && (
            <p className="error">{formik.errors.address}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="cp"
            placeholder="Postal Code"
            value={formik.values.cp}
            onChange={formik.handleChange}
          />
          {formik.touched.cp && formik.errors.cp && (
            <p className="error">{formik.errors.cp}</p>
          )}
        </div>
      </div>
      <div className="input-group">
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="error">{formik.errors.phone}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? <div className="loader"></div> : "Save Address"}
      </button>
    </form>
  );
};

// Simulación de la función para guardar la dirección en la API
async function saveAddress(data) {
  // Aquí iría la lógica para guardar los datos, por ejemplo con fetch o axios
  console.log("Saving address:", data);
}
