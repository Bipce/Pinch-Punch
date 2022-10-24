import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useNoInitialEffect = (effect: EffectCallback, deps: DependencyList) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let ret: void | (() => void) = () => {};

    if (initialRender.current) {
      initialRender.current = false;
    } else {
      ret = effect();
    }

    if (ret) {
      return ret();
    }
  }, deps);
};
