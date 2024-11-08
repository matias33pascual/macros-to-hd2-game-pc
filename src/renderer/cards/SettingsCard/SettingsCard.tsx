import { Icon } from "@nimbus-ds/components";
import {
  AlignCenterIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@nimbus-ds/icons";
import { useContext } from "react";
import { Card, Input } from "renderer/components";
import { CUSTOM_KEY_MAPPING } from "renderer/constants";
import { LanguageContext } from "renderer/context/languageContext";
import { useUserKeys } from "renderer/hooks";
import "./SettingsCard.scss";

export function SettingsCard() {
  const { userKeys, setUserKey } = useUserKeys();

  const language = useContext(LanguageContext);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputRef = e.target as HTMLInputElement;
    const focusedKey = inputRef.name;
    const { code, key } = e;

    setUserKey(focusedKey, CUSTOM_KEY_MAPPING[code] || key.toLowerCase());

    inputRef.blur();
  };

  return (
    <Card title={language.currentLanguage.stratagems_keyscode}>
      <div className="info">{language.currentLanguage.menu_tip}</div>

      <Input
        name="open"
        label={language.currentLanguage.open_menu}
        placeholder={language.currentLanguage.open_menu}
        append={<Icon source={<AlignCenterIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.open}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="up"
        label={language.currentLanguage.up}
        placeholder={language.currentLanguage.up}
        append={<Icon source={<ChevronUpIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.up}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="down"
        label={language.currentLanguage.down}
        placeholder={language.currentLanguage.down}
        append={<Icon source={<ChevronDownIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.down}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="left"
        label={language.currentLanguage.left}
        placeholder={language.currentLanguage.left}
        append={<Icon source={<ChevronLeftIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.left}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="right"
        label={language.currentLanguage.right}
        placeholder={language.currentLanguage.right}
        append={<Icon source={<ChevronRightIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.right}
        readOnly
        onKeyDown={handleKeyDown}
      />
    </Card>
  );
}
