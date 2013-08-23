<?php

namespace Drupal\first\Controller;
 
use Drupal\Core\Controller\ControllerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class FirstController implements ControllerInterface{
	public static function create(ContainerInterface $container) {
	    return new static($container->get('module_handler'));
	  }

	/**
	 * Visualizziamo il contenuto nella pagina
	 */
	public function pageContent($argomento){
		return array(
			'#markup' => t('Argomento: '.$argomento),
		);
	}
}

