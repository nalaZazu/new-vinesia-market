import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-[#35844B]" : " bg-stone-400"}
          relative inline-flex h-[19px] w-[31px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-3" : "translate-x-0"}
            pointer-events-none  h-[16px] w-[16px] transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
