import { useEffect, } from "react"

export const RightMouse = () => {
    useEffect(() => {
        document.addEventListener("contextmenu", (e: any) => {
            e.preventDefault(); // Prevents default context menu from appearing
            // Custom logic for what should happen on right-click goes here
        })

        document.addEventListener('mousedown', (e: any) => {
            if (e.button === 2) { // Right mouse button clicked
                // Add your custom functionality here
                alert("right")
            }
        });
    })

    return (<> </>)
}