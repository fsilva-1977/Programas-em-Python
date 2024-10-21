import os.path
import sys
import glob

def find(txt):
    """ Encontra módulos que tem o nome 
     contendo o parâmetro
    """
    resp = []

    for path in sys.path:
        mods = glob.glob('%s/*.py' % path)

        for mod in mods:
            if txt in os.path.basename(mod):
                resp.append(mod)
    
    return resp

from os.path import getsize, getmtime
from time import localtime, asctime
import modutils

mods = modutils.find('time')

for mod in mods:
    tm = asctime(localtime(getmtime(mod)))
    kb = getsize(mod) / 1024
    print('%s: (%d kbytes, %s)' % (mod, kb, tm))
