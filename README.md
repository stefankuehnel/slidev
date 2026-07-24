# slidev

[![CI](../../actions/workflows/ci.yaml/badge.svg)](../../actions/workflows/ci.yaml)

A Template for Creating Slides with [Slidev](https://sli.dev).

## Get Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/stefankuehnel/slidev.git
   cd slidev
   ```

2. **Initialize project:**

   ```bash
   task init --interactive
   ```

3. **Run the development server:**

   ```bash
   task dev
   ```

4. **Open your browser:**

   Navigate to `http://localhost:3030` to see the presentation in action.

## Development

This project uses [Task](https://taskfile.dev) as a task runner.

### Available Tasks

```bash
# Run default tasks (build)
task

# Initialize project
task init

# Install project dependencies
task install

# Run development server
task dev

# Build project
task build

# Export project
task export

# Check project
task check

# Lint project
task lint

# Format project
task format

# Deploy project
task deploy

# Clean project
task clean
```

## Documentation

Below you will find a list of documentation for tools used in this project.

- **Nix**: Nix Package Manager - [Docs](https://wiki.nixos.org/wiki/Nix)
- **Nix Flakes**: An Experimental Feature for Managing Dependencies of Nix Projects -
  [Docs](https://wiki.nixos.org/wiki/Flakes)
- **Task**: A Task Runner / Build Tool written in Go - [Docs](https://taskfile.dev/)
- **GitHub Actions**: Automation and Execution of Software Development Workflows -
  [Docs](https://docs.github.com/en/actions)

## Found a Bug?

Thank you for your message! Please fill out a [bug report](../../issues/new).

## License

This project is licensed under the
[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.txt).
