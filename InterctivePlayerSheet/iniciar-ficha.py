#!/usr/bin/env python3
"""Servidor local da ficha. Apenas biblioteca padrão do Python 3."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class SheetHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Atualizações do código não ficam presas no cache de outra sessão.
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()


def main():
    app = Path(__file__).resolve().parent / 'app'
    handler = partial(SheetHandler, directory=str(app))
    try:
        server = ThreadingHTTPServer(('127.0.0.1', 8765), handler)
    except OSError as error:
        raise SystemExit(f'Não foi possível iniciar localhost:8765: {error}\n'
                         'Se a ficha já estiver aberta, use o servidor existente.') from error
    print('Ficha do Supros: http://localhost:8765\n'
          'Mantenha este terminal aberto. Para encerrar, pressione Ctrl+C.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
