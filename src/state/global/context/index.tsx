import { createContext } from "react";

import { GlobalState, initialGlobalState } from "~/state";

const GlobalContext = createContext<GlobalState>(initialGlobalState);

export default GlobalContext;
