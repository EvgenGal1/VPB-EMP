import React from "react";

import { useToggle } from "../hooks/useToggle";

export function ToogleFC() {
  const [isVisible, toggleIsVisible] = useToggle(true);

  return (
    <div className="ToogleFC">
      <div className="ToogleFC__descript">
        <h1>ToogleFC</h1>
      </div>
      <div className="ToogleFC__content">
        <button onClick={toggleIsVisible}>Переключатель</button>
        {isVisible && (
          <>
            <div>Form Const</div>
          </>
        )}
      </div>
    </div>
  );
}
