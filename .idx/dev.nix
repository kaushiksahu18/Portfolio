# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{pkgs}: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_22
    pkgs.nodePackages.pnpm
    pkgs.bun
    pkgs.git 

    # terminal
    pkgs.zsh
    pkgs.fzf
    pkgs.eza
    pkgs.bat
    pkgs.tldr
    pkgs.btop
    pkgs.neovim
    pkgs.zoxide
    pkgs.thefuck
    pkgs.starship
    pkgs.fira-code
    pkgs.meslo-lgs-nf
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "metaphore.kanagawa-vscode-color-theme"
      "Catppuccin.catppuccin-vsc"
      "esbenp.prettier-vscode"
      "PKief.material-icon-theme"
      "jock.svg"
      "usernamehw.errorlens"
      "yoavbls.pretty-ts-errors"
      "bradlc.vscode-tailwindcss"
      "formulahendry.auto-rename-tag"
      "dsznajder.es7-react-js-snippets"
      "Supermaven.supermaven"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        idx-init = "git clone https://github.com/kaushiksahu18/idx && cp -r idx/.zshrc ~/ && cp -r ./idx/settings.json ./.idx/ && rm -rf ./idx";
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    # previews = {
    #   enable = true;
    #   previews = {
    #     web = {
    #       command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0"];
    #       manager = "web";
    #     };
    #   };
    # };
  };
}