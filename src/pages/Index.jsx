import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 w-full">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow w-full p-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p className="mb-4">This is a full-width application you can build upon.</p>
          <div className="flex space-x-2">
            <Input className="flex-grow" placeholder="Enter something..." />
            <Button>Submit</Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Start adding your features here!</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;