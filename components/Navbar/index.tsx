import Menu from "./Menu";
import InputSearch from "./InputSearch";
export default function NavBar() {
  return (
    <div className="flex  w-full pt-7 lg:justify-around lg:pt-12">
      <Menu />
      <InputSearch />
    </div>
  );
}
