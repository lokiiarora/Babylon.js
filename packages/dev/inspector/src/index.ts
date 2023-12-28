export * from "./inspector";
export * from "./components/sceneExplorer/entities/gui/guiTools";
function loadScriptAsync(url: string): Promise<void> {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = () => {
            resolve();
        };
        document.head.appendChild(script);
    });
}

loadScriptAsync("https://cdn.jsdelivr.net/npm/fflate@0.8.0/umd/index.js");
