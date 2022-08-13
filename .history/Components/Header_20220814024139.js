import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className=" flex flex-grow  justify-around max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem
          onclick={signIn}
          Icon={UserIcon}
          title={session ? "Sign out" : "Sign In"}
        />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
