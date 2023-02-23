local WebSocket = syn.websocket.connect("ws://localhost:3006")

WebSocket.OnMessage:Connect(function(_entity)
    print(_entity)
    if _entity == "Screech" then -- //spawn Screech
        require(game.StarterGui.MainUI.Initiator.Main_Game.RemoteListener.Modules.Screech)(require(game.Players.LocalPlayer.PlayerGui.MainUI.Initiator.Main_Game),
        workspace.CurrentRooms[game.Players.LocalPlayer:GetAttribute("CurrentRoom")])
    elseif _entity == "Glitch" then -- //spawn Glitch
        require(game.ReplicatedStorage.ClientModules.EntityModules.Glitch).stuff(require(game.Players.LocalPlayer.PlayerGui.MainUI.Initiator.Main_Game),
workspace.CurrentRooms[game.Players.LocalPlayer:GetAttribute("CurrentRoom")])
    end
end)
