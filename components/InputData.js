const InputData = [
  {
    name: "student_name",
    type: "text",
    placeholder: "enter student name",
    label: "Student Name",
  },
  {
    name: "student_email",
    type: "email",
    placeholder: "enter email",
    label: "email",
  },
  {
    name: "student_country",
    type: "text",
    placeholder: "enter country",
    label: "country",
  },
  {
    name: "student_city",
    type: "text",
    placeholder: "enter city",
    label: "city",
  },
  {
    name: "student_address",
    type: "text",
    placeholder: "enter address",
    label: "address",
  },
  {
    name: "student_zip",
    type: "text",
    placeholder: "enter zipcode",
    label: "zipcode",
  },
];

export const selectData = [
  {
    label: "select grade",
    name: "student_grade",
    options: [
      "grade 1",
      "grade 2",
      "grade 3",
      "grade 4",
      "grade 5",
      "grade 6",
      "grade 7",
      "grade 8",
      "grade 9",
      "grade 10",
    ],
  },
  {
    label: "select timezone",
    name: "student_time_zone",
    options: [
      "UTC Western European Time",
      "Eastern Standard Time ( UTC - 5 )",
      "Indian Standard Time (UTC + 5:30 )",
    ],
  },
];

export default InputData;
