const Login = () => {
  return <p>ログインページ</p>;
};

export const getStaticProps = async () => {
  return { props: { backTo: "/" } };
};

export default Login;
