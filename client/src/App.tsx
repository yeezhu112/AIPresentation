import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Presentation from "@/pages/Presentation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Presentation} />
      <Route path="/AIPresentation" component={Presentation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

{/* <Router basename="/rest-express">
{}
</Router> */}

export default App;
