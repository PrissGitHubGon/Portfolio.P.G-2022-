import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import pdf from "../assets/doc/CV_Priscillia Gonçalves.pdf";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownContact() {
  return (
    <Menu as="div" className="relative inline-block text-center z-40">
      <div>
        <Menu.Button className="space-x-8 lg:flex mr-5 ">
          Me contacter
          <i
            className="fa-solid fa-angle-down -mr-1 ml-2 pt-1"
            aria-hidden="true"
          ></i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="mailto:priscillia.g.pro@outlook.fr"
                  className={classNames(
                    active ? "bg-gray-800/50 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Envoyer un Email
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href={pdf}
                  download
                  className={classNames(
                    active ? "bg-gray-800/50 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Télécharger mon cv
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="tel:0672114122"
                  className={classNames(
                    active ? "bg-gray-800/50 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Appelez moi 😃
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
