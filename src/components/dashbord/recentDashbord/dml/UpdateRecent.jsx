import React, { useEffect, useState } from "react";
import "./insert_forms.css";
import RemoveImage from "./RemoveImage";
import instance from "../../../data/BaseUrl";


export function UpdateRecent({ location }) {
  
  const { item } = location.state;
  const [data, setData] = useState({
    cover: null,
    filePdfRecent: null,
    name: "",
    name_en: "",
    location: "",
    location_en: "",
    category: "",
    category_en: "",
    price: "",
    price_en: "",
    type: "",
    type_en: "",
    property_area: "",
    street_direction: "",
    street_direction_en: "",
    bathrooms: "",
    bedrooms: "",
    land_length: "",
    property_age: "",
    property_age_en: "",
    street_width: "",
    land_width: "",
    description: "",
    description_en: "",
    license_number: "",
    map_location: "",
    images: [],
  });
  useEffect(() => {
    setData(item);
  }, []);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const name = e.target.name;
    if (name === "cover" || name === "filePdfRecent") {
      setData({
        ...data,
        [name]: e.target.files[0],
      });
    } else if (name === "images") {
      const files = Array.from(e.target.files);
      setData({
        ...data,
        [name]: files,
      });
    } else {
      const files = Array.from(e.target.files);
      setData({
        ...data,
        [name]: [...data[name], ...files],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataAPI = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((item) => {
          dataAPI.append("images[]", item);
        });
      } else {
        dataAPI.append(key, value);
      }
    });

    try {
      const response = await instance.post(
        `/recent/update/${item["id"]}`,
        dataAPI,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("تم إرسال البيانات بنجاح:", response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
    }
  };

  return (
    <section className="insert-forms">
      <div className="container">
        <div className="modal">
          <div className="modal__header">
            <span className="modal__title">تعديل عقار</span>
            <button className="button button--icon">
              <svg
                width="24"
                viewBox="0 0 24 24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </button>
          </div>
          <form className="modal__body" onSubmit={handleSubmit}>
            {[
              { name: "cover", label: "غلاف", type: "file" },
              { name: "filePdfRecent", label: "ملف العقار", type: "filePdf" },
              { name: "name", label: "الاسم بالعربية" },
              { name: "name_en", label: "الاسم بالإنجليزية" },
              { name: "location", label: "الموقع بالعربية" },
              { name: "location_en", label: "الموقع بالإنجليزية" },
              { name: "category", label: "حالة العقار بالعربية" },
              { name: "category_en", label: "حالة العقار بالإنجليزية" },
              { name: "price", label: "السعر بالعربية" },
              { name: "price_en", label: "السعر بالإنجليزية" },
              { name: "type", label: "النوع بالعربية" },
              { name: "type_en", label: "النوع بالإنجليزية" },
              { name: "property_area", label: "مساحة العقار" },
              { name: "street_direction", label: "اتجاه الشارع بالعربية" },
              {
                name: "street_direction_en",
                label: "اتجاه الشارع بالإنجليزية",
              },
              { name: "street_width", label: "عرض الشارع" },
              { name: "bathrooms", label: "عدد الحمامات" },
              { name: "bedrooms", label: "عدد غرف النوم" },
              { name: "land_length", label: "طول الأرض" },
              { name: "land_width", label: "عرض الأرض" },
              { name: "property_age", label: "عمر العقار بالعربية" },
              { name: "property_age_en", label: "عمر العقار بالإنجليزية" },
              { name: "license_number", label: "رقم الرخصة" },
              { name: "map_location", label: "موقع الخريطة" },
              {
                name: "description",
                label: "الوصف بالعربية",
                type: "description",
              },
              {
                name: "description_en",
                label: "الوصف بالإنجليزية",
                type: "description",
              },
              { name: "images", label: "الصور", type: "file", multiple: true },
            ].map(({ name, label, type, multiple }) => (
              <div key={name} className="input">
                <label className="input__label">{label}</label>
                {type === "file" ? (
                  <input
                    className="input__field"
                    type="file"
                    accept="image/*"
                    name={name}
                    onChange={handleImageChange}
                    multiple={multiple}
                  />
                ) : type === "filePdf" ? (
                  <input
                    className="input__field"
                    type="file"
                    accept="application/pdf"
                    name={name}
                    onChange={handleImageChange}
                  />
                ) : type === "description" ? (
                  <textarea
                    className="input__field"
                    name={name}
                    value={data[name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    className="input__field"
                    type="text"
                    name={name}
                    value={data[name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            <div className="modal__footer">
              <button type="submit" className="button button--primary">
                حفظ التعديلات
              </button>
            </div>
          </form>
          <RemoveImage id={item.id} />
        </div>
      </div>
    </section>
  );
}
