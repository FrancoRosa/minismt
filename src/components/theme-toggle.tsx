import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

function toggleTheme() {
  const root = document.documentElement
  const next = !root.classList.contains("dark")
  root.classList.toggle("dark", next)
  try {
    localStorage.setItem("theme", next ? "dark" : "light")
  } catch {
    // localStorage unavailable, theme just won't persist
  }
}

function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}

export { ThemeToggle }
