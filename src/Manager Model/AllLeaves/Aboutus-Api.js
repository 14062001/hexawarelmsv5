
const sick=sessionStorage.getItem("sick");
const earned=sessionStorage.getItem("earned");
const maternity=sessionStorage.getItem("maternity")

const data = [
    {
      id: 1,
      image: "https://img.icons8.com/metro/44/leave.png",
      title: "Sick Leave",
      desc: "Available:"+sick,
    },
    {
      id: 2,
      image: "https://img.icons8.com/metro/44/leave.png",
      title: "Earned Leave",
      desc: "Available:"+earned,
    },
    {
      id: 3,
      image: "https://img.icons8.com/metro/44/leave.png",
      title: "Maternity Leave",
      desc: "Available:"+maternity,
    },
  ]
  export default data