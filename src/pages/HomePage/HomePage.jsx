import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.home_title}>Welcome to My ContactsApp </h1>
      <p className={s.home_text}>Home Page</p>
    </div>
  );
};

export default HomePage;
