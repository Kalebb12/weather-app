import {
  Button,
  Image,
  Menu,
  Portal,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";

const DropDown = () => {
  const items = {
    temperature: [
      { title: "Celcius (°C)", value: "celsius" },
      { title: "Fahrenheit (°F)", value: "fahrenheit" },
    ],
    windSpeed: [
      { title: "km/h", value: "km/h" },
      { title: "mph", value: "mph" },
    ],
    precipitation: [
      { title: "millimeters (mm)", value: "mm" },
      { title: "inches (in)", value: "in" },
    ],
  };

  const Pgroup = useCheckboxGroup({ defaultValue: ["mm"] });
  const Wgroup = useCheckboxGroup({ defaultValue: ["km/h"] });
  const Tgroup = useCheckboxGroup({ defaultValue: ["celsius"] });

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          p="12px 16px"
          spaceX="10px"
          bg="var(--neutral-800)"
          variant="subtle"
          rounded="8px"
        >
          <FaCog size={18} />
          <span>Units</span>
          <Menu.Arrow>
            {/* {({ isOpen }) => {
                  return (
                    <Image
                      src="/images/icon-dropdown.svg"
                      alt=""
                      rotate={isOpen ? 180 : 0}
                    />
                  );
                }} */}
          </Menu.Arrow>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            bg="var(--neutral-800)"
            width="214px"
            rounded="12px"
            p="6px 8px"
            border="1px solid var(--neutral-600)"
            shadow="box-shadow: 0px 8px 16px 0px #02012C52;"
          >
            <Menu.Item
              cursor="pointer"
              p="10px 8px"
              bg="var(--neutral-700)"
              rounded="8px"
            >
              Switch to Imperial
            </Menu.Item>
            <Menu.ItemGroup
              spaceY="4px"
              borderBottom="1px solid var(--neutral-700)"
            >
              <Menu.ItemGroupLabel>Temperature</Menu.ItemGroupLabel>
              {items.temperature.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={Tgroup.isChecked(value)}
                  cursor="pointer"
                  py="10px"
                  bg="var(--neutral-700)"
                  rounded="8px"
                  onCheckedChange={() => Tgroup.toggleValue(value)}
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
            <Menu.ItemGroup
              spaceY="4px"
              borderBottom="1px solid var(--neutral-700)"
            >
              <Menu.ItemGroupLabel>Wind Speed</Menu.ItemGroupLabel>
              {items.windSpeed.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={Wgroup.isChecked(value)}
                  onCheckedChange={() => Wgroup.toggleValue(value)}
                  cursor="pointer"
                  py="10px"
                  rounded="8px"
                  bg="var(--neutral-700)"
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
            <Menu.ItemGroup spaceY="4px">
              <Menu.ItemGroupLabel>Precipitation</Menu.ItemGroupLabel>
              {items.precipitation.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={Pgroup.isChecked(value)}
                  cursor="pointer"
                  py="10px"
                  rounded="8px"
                  bg="var(--neutral-700)"
                  onCheckedChange={() => Pgroup.toggleValue(value)}
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default DropDown;
