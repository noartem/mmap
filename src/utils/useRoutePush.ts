import { useHistory, useRouteMatch } from "react-router-dom";

export function useRoutePush() {
  const history = useHistory();

  return (path: string) => {
    history.push(`${path}`);
  };
}
