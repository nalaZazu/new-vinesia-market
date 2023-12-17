import { AlertError, ListCard } from "@/common/Components";
import React from "react";

export default function Step2() {
  return (
    <div>
      <ListCard
        title="Order summary "
        titleClass="font-bold p-2"
        value="€5,900"
        valueClass="font-bold p-2"
      />
      <ListCard
        title="Available funds"
        titleClass=" p-2"
        value="€70"
        valueClass=" p-2 text-[#DC2626]"
      />

      <div className="bg-white rounded-lg">
        <div className="p-2">
          <AlertError message="You cannot make a purchase because you currently do not have enough funds. Please top up your wallet first." />
        </div>

        <ListCard
          title="Missing Funds"
          titleClass=" p-2 font-bold"
          value="-€70"
          valueClass=" p-2 font-bold text-[#DC2626]"
        />
      </div>
    </div>
  );
}
