import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Translate } from "react-localize-alias";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropdownContact = (props) => {
  const {
    titleHeader,
    link1,
    titleLink1,
    link2,
    titleLink2,
    link3,
    titleLink3,
  } = props;
  return (
    <Menu as="div" className="relative inline-block text-center z-40">
      <div>
        <Menu.Button className="space-x-8 lg:flex mr-5 ">
          <Translate id={titleHeader} />

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
                  href={link1}
                  className={classNames(
                    active
                      ? "bg-gradient-to-r from-green-300 to-blue-400 text-gray-900"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <Translate id={titleLink1} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href={link2}
                  className={classNames(
                    active
                      ? "bg-gradient-to-r from-pink-400 to-yellow-400 text-gray-900"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <Translate id={titleLink2} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href={link3}
                  className={classNames(
                    active && titleLink3
                      ? "bg-gradient-to-r from-blue-400 to-green-300 text-gray-900"
                      : "text-gray-700",
                    titleLink3 ? "block px-4 py-2 text-sm" : ""
                  )}
                >
                  <Translate id={titleLink3} />
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default DropdownContact;
