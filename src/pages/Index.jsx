import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow flex justify-center items-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a bare-bones application you can build upon.</p>
            <Input className="mb-2" placeholder="Enter something..." />
            <Button>Submit</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Start adding your features here!</p>
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;