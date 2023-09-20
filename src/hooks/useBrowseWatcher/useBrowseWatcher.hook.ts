import React, { useState, useEffect } from "react";

type DisconnectWatcher = () => void;

export function useBrowseWatcher(disconnectWatcher: DisconnectWatcher) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Você tem certeza de que deseja sair?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      disconnectWatcher();
    };
  }, [disconnectWatcher]);

  return {};
}
