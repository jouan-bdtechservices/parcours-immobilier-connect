
import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Plus, Paperclip, Mic, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const ConversationTemplate = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      sender: "bot",
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Merci pour votre message. Je suis en train de traiter votre demande concernant votre parcours professionnel. Puis-je avoir plus de détails sur votre situation actuelle ?",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording for demo purposes
      setTimeout(() => {
        setIsRecording(false);
        setInputValue("Je cherche à me reconvertir dans un nouveau domaine professionnel");
      }, 2000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Aujourd'hui";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Hier";
    } else {
      return date.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'short'
      });
    }
  };

  // Group messages by date
  const groupedMessages: { [key: string]: Message[] } = {};
  messages.forEach(message => {
    const dateStr = formatDate(message.timestamp);
    if (!groupedMessages[dateStr]) {
      groupedMessages[dateStr] = [];
    }
    groupedMessages[dateStr].push(message);
  });

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md h-[600px] overflow-hidden">
      <div className="border-b px-4 py-3 flex items-center">
        <div className="flex items-center flex-1">
          <Avatar className="h-10 w-10 bg-blue-100 mr-3">
            <AvatarFallback className="bg-blue-100 text-blue-600">
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-primary">Assistant MonParcours</h3>
            <p className="text-xs text-muted-foreground">En ligne</p>
          </div>
        </div>
        <Button variant="outline" size="icon" className="rounded-full">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {Object.entries(groupedMessages).map(([date, dateMessages]) => (
            <div key={date} className="space-y-4">
              <div className="flex justify-center">
                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full text-muted-foreground">
                  {date}
                </span>
              </div>
              
              {dateMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={cn(
                    "flex", 
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8 mr-2 mt-1 shrink-0">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div 
                    className={cn(
                      "max-w-[80%] rounded-xl p-3",
                      message.sender === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-slate-100 dark:bg-slate-700 rounded-tl-none"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">{formatTime(message.timestamp)}</p>
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 ml-2 mt-1 shrink-0">
                      <AvatarFallback className="bg-slate-200 dark:bg-slate-600">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <Avatar className="h-8 w-8 mr-2 shrink-0">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-slate-100 dark:bg-slate-700 rounded-xl rounded-tl-none p-3 flex items-center">
                <span className="typing-indicator">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Paperclip className="h-4 w-4" />
          </Button>
          <div className="flex-1 relative">
            {inputValue.length > 80 ? (
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrivez votre message..."
                className="pr-10 min-h-[80px] max-h-[160px] resize-none"
                onKeyDown={handleKeyDown}
              />
            ) : (
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrivez votre message..."
                className="pr-10"
                onKeyDown={handleKeyDown}
              />
            )}
            {inputValue && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
              </Button>
            )}
          </div>
          <Button 
            variant={isRecording ? "default" : "outline"} 
            size="icon" 
            className={cn("rounded-full", isRecording && "bg-red-500 hover:bg-red-600")}
            onClick={toggleRecording}
          >
            {isRecording ? <X className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
        </div>
        {isRecording && (
          <div className="flex items-center justify-center mt-2">
            <div className="recording-indicator mr-2"></div>
            <span className="text-xs text-red-500">Enregistrement en cours...</span>
          </div>
        )}
      </div>
    </div>
  );
};
