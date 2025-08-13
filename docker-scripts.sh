#!/bin/bash

# Docker scripts for Kundan's Portfolio

echo "🐳 Docker Scripts for Portfolio"
echo "================================"

case "$1" in
    "dev")
        echo "🚀 Starting development environment..."
        docker-compose -f docker-compose.dev.yml up --build
        ;;
    "dev-bg")
        echo "🚀 Starting development environment in background..."
        docker-compose -f docker-compose.dev.yml up -d --build
        ;;
    "prod")
        echo "🏭 Starting production environment..."
        docker-compose up --build
        ;;
    "prod-bg")
        echo "🏭 Starting production environment in background..."
        docker-compose up -d --build
        ;;
    "stop")
        echo "🛑 Stopping all containers..."
        docker-compose down
        docker-compose -f docker-compose.dev.yml down
        ;;
    "clean")
        echo "🧹 Cleaning up Docker resources..."
        docker-compose down --rmi all --volumes --remove-orphans
        docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
        docker system prune -f
        ;;
    "logs")
        echo "📋 Showing logs..."
        docker-compose logs -f
        ;;
    "logs-dev")
        echo "📋 Showing development logs..."
        docker-compose -f docker-compose.dev.yml logs -f
        ;;
    *)
        echo "Usage: $0 {dev|dev-bg|prod|prod-bg|stop|clean|logs|logs-dev}"
        echo ""
        echo "Commands:"
        echo "  dev      - Start development environment"
        echo "  dev-bg   - Start development environment in background"
        echo "  prod     - Start production environment"
        echo "  prod-bg  - Start production environment in background"
        echo "  stop     - Stop all containers"
        echo "  clean    - Clean up Docker resources"
        echo "  logs     - Show production logs"
        echo "  logs-dev - Show development logs"
        exit 1
        ;;
esac
