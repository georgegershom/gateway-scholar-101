import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import FiguresTables from "./pages/FiguresTables";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import BookCall from "./pages/BookCall";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import RegistrationChecklist from "./pages/RegistrationChecklist";
import MyFiles from "./pages/MyFiles";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services"} component={Services} />
        <Route path={"/figures-tables"} component={FiguresTables} />
        <Route path={"/policies"} component={Policies} />
        <Route path={"/register"} component={Register} />
        <Route path={"/registration-checklist"} component={RegistrationChecklist} />
        <Route path={"/book"} component={BookCall} />
        <Route path={"/thanks"} component={ThankYou} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/cookies"} component={Cookies} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/my-files"} component={MyFiles} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
