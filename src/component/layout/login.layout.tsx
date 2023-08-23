import Header from "@/src/component/header/index.client";
export default function LoginLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
