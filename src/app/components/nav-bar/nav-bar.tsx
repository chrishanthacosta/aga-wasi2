"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import  Image  from 'next/image';
 
import { signIn, useSession, signOut } from "next-auth/react"
 

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data: session } = useSession();
  console.log(session)
  const menuItems = [
    "Products",
    "Customers",
    "My Profile",
    "About Us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
      
        <NavbarBrand>
                  <Image src="/logo.jpg"
                      width={50}
                      height={50}
                      alt="Picture of the author"    />
          <p className="font-bold text-inherit ml-2">Aga-Wasi</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/products">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/customers" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        {session && <NavbarItem isActive>
          <Link href="/myprofile" aria-current="page">
            My Profile
          </Link>
        </NavbarItem>
        }
        <NavbarItem>
          <Link color="foreground" href="/aboutus">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}

        {!session &&  <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onClick={(e) => {
            e.preventDefault()
            signIn()
          }}>
            Login
          </Button>
        </NavbarItem>}
        {session && <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" onClick={(e) => {
            e.preventDefault()
            signOut()
          }}>
            Log Out
          </Button>
        </NavbarItem>}

              <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className="sm:hidden"
              />     
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
