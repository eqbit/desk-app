type WindowWithApi = Window & {
  api: {
    send: (channel: string, data?: any) => void;
    receive: (channel: string, func: (data: any) => void) => void;
  }
}

export const electronApi = (window as unknown as WindowWithApi).api;
